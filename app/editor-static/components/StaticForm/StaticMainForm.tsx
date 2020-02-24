import React from 'react';

import {
    COLOR_RED_NORMAL,
    COLOR_GREEN_NORMAL
} from '../../../common/styles/commonStyles';
import * as SC from './StaticForm.styled';
import * as enums from '../../../editor/enums';

import TableTypeInput from '../StaticFormInputs/TableTypeInput';
import TableBaseInput from '../StaticFormInputs/TableBaseInput';
import { ImmutableJSEditorType } from '../../../editor/redux/editorTypes';
import InfoBlock from '../../../common/components/InfoBlock';

interface StaticMainFormProps {
    editor: ImmutableJSEditorType;
}
export default function StaticMainForm(props: StaticMainFormProps): JSX.Element {
    const { editor } = props;
    const base = editor.getIn(['trainingTable', 'base']);
    const type = editor.getIn(['trainingTable', 'type']);
    const totalTime = editor.getIn(['trainingTable', 'duration']);

    let setTitle: string = '';
    setTitle = enums.TABLE_TYPE_CO2 === type ? 'Breath Hold' : setTitle;
    setTitle = enums.TABLE_TYPE_O2 === type ? 'Breath Up' : setTitle;

    let setTitleColor: string = '';
    setTitleColor = enums.TABLE_TYPE_CO2 === type ? COLOR_RED_NORMAL : setTitleColor;
    setTitleColor = enums.TABLE_TYPE_O2 === type ? COLOR_GREEN_NORMAL : setTitleColor;

    return (
        <SC.StaticMainFormWrapper small={enums.TABLE_TYPE_FREE === type}>

            <TableTypeInput />

            <SC.MainInfoBlock>
                {enums.TABLE_TYPE_FREE != type && (
                    <InfoBlock
                        title={setTitle}
                        timeContent={base}
                        textColor={setTitleColor}
                    />
                )}

                <InfoBlock
                    title="Total Time"
                    timeContent={totalTime}
                />
            </SC.MainInfoBlock>

            {enums.TABLE_TYPE_FREE != type && <TableBaseInput />}
        </SC.StaticMainFormWrapper>
    );
}