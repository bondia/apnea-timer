import { isFinite, round } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

const useMouthfill = () => {
  const [d1, setD1] = useState<number>(0);
  const [d2, setD2] = useState<number>(0);
  const [d3, setD3] = useState<number>(0);

  const d4 = useMemo(() => {
    const result = ((d2 + 10) * (d3 + 10)) / (d1 + 10) - 10;
    return isFinite(result) ? round(result, 2) : 0;
  }, [d1, d2, d3]);

  const setD1Callback = useCallback(
    (value: number) => {
      const normalizedVal = value > 0 ? value : 0;
      setD1(normalizedVal);
      if (d2 < normalizedVal) {
        setD2(normalizedVal);
      }
    },
    [d2],
  );

  const setD2Callback = useCallback(
    (value: number) => {
      const normalizedVal = value > 0 ? value : 0;
      setD2(normalizedVal);
      if (d1 > normalizedVal) {
        setD1(normalizedVal);
      }
    },
    [d1],
  );

  const setD3Callback = useCallback((value: number) => {
    const normalizedVal = value > 0 ? value : 0;
    setD3(normalizedVal);
  }, []);

  return {
    d1,
    setD1: setD1Callback,
    d2,
    setD2: setD2Callback,
    d3,
    setD3: setD3Callback,
    d4,
  };
};

export default useMouthfill;
