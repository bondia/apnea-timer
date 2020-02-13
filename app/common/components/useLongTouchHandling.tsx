import { useEffect, useState, SetStateAction, Dispatch } from "react";
import { GestureResponderEvent } from "react-native";

// Long touch notification rating in milliseconds 
const UPDATE_RATE_MILLISECONDS = 100;

/**
 * Crates states to track if the button was pushed for a long time or just short.
 * Will create some intervals to get periodical notifications during a long touch.
 * 
 * - enabled: whether the button can do actions
 * - onPressStart: get notified when the button is pushed
 * - onShortPressEnd: get notified when the button is not pushed anymore. Only when the push was short.
 * - onLongPressStart: get notified when the push is not short anymore and is a long push.
 * - onLongPressEnd: get notified when the long push is finished
 * - onPressInterval: once the button push is long; get notified by intervals during the push.
 * - pressIntervalRefresh: configure the onPressInterval notification.
 * 
 * @param input UseLongTouchHandlingInput
 */
export default function useLongTouchHandling(input: UseLongTouchHandlingInput): UseLongTouchHandlingOutput {
    // check input with defaults
    const {
        enabled,
        onPressStart = () => undefined,
        onShortPressEnd = () => undefined,
        onLongPressStart = () => undefined,
        onLongPressEnd = () => undefined,
        onPressInterval = () => undefined,
        pressIntervalRefresh = UPDATE_RATE_MILLISECONDS,
    } = input;
    
    // init state
    const [ isLongPressed, setIsLongPressed ] = useState(false); 
    
    // use effect that will trigger the refresh intervals
    useEffect(() => updateInterval({
        enabled,
        isLongPressed,
        onLongPressStart,
        onPressInterval,
        pressIntervalRefresh,
    }), [ pressIntervalRefresh, isLongPressed, enabled ]);

    // return 
    return {
        onPressIn: () => onPressIn({ enabled, onPressStart }),
        onLongPress: () => onLongPress({ enabled, setIsLongPressed }),
        onPressOut: () => onPressOut({ 
            enabled,
            onShortPressEnd,
            onLongPressEnd,
            isLongPressed, 
            setIsLongPressed 
        }),
    }
}

interface UseLongTouchHandlingInput {
    active?: boolean;
    enabled?: boolean;
    onPressStart?: () => void;
    onShortPressEnd?: () => void;
    onLongPressStart?: () => void;
    onLongPressEnd?: () => void;
    onPressInterval?: () => void;
    pressIntervalRefresh?: number;
}

interface UseLongTouchHandlingOutput {
    onPressIn: (event: GestureResponderEvent) => void;
    onLongPress: (event: GestureResponderEvent) => void;
    onPressOut: (event: GestureResponderEvent) => void;
}

/**
 * - Notify when long press starts
 * - Notify press intervals based on refresh rate 
 * @param input updateIntervalInput
 */
function updateInterval(input: UpdateIntervalInput): () => void | void {
    const { 
        enabled,
        isLongPressed,
        onLongPressStart,
        onPressInterval,
        pressIntervalRefresh,
    } = input;

    if (isLongPressed && enabled) {
        // call long press start callback
        onLongPressStart();
        // start timed interval
        let id = setInterval(() => onPressInterval(), pressIntervalRefresh);
        return () => clearInterval(id);
    }
}

interface UpdateIntervalInput { 
    enabled: boolean;
    isLongPressed: boolean;
    onLongPressStart: () => void;
    onPressInterval: () => void;
    pressIntervalRefresh: number;
}

/**
 * Hanlde Press start
 * - Notify touch start if active
 */
function onPressIn(input: OnPressInInput): void {
    const { enabled, onPressStart } = input;
    if (enabled) {
        onPressStart();
    }
}

interface OnPressInInput { 
    enabled: boolean;
    onPressStart: () => void;
}

/**
 * Handle Long Press start
 * - Update state if active
 */
function onLongPress(input: OnLongPressInput): void {
    const { enabled, setIsLongPressed } = input;
    if (enabled) {
        setIsLongPressed(true);
    }
}

interface OnLongPressInput {
    enabled: boolean;
    setIsLongPressed: Dispatch<SetStateAction<boolean>>;
}

/**
 * Handle Press out (Long or Short)
 * - Notify long or short touch end
 * - Update state
 */
function onPressOut(input: OnPressOutInput): void {
    const { enabled, isLongPressed, setIsLongPressed, onShortPressEnd, onLongPressEnd } = input;
    // notify long press end
    if (enabled && isLongPressed) {
        onLongPressEnd();
    }
    // notify short press end
    if (enabled && !isLongPressed) {
        onShortPressEnd();
    }
    // update state
    setIsLongPressed(false);
}

interface OnPressOutInput {
    enabled: boolean; 
    isLongPressed: boolean;
    setIsLongPressed: Dispatch<SetStateAction<boolean>>;
    onShortPressEnd: () => void;
    onLongPressEnd: () => void;
}