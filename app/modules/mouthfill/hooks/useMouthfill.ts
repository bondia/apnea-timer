import { isFinite, round } from 'lodash';
import { useCallback, useState } from 'react';

const calculateMaxDepth = (testPerformed: number, testFailed: number, performed: number) => {
  const result = ((testFailed + 10) * (performed + 10)) / (testPerformed + 10) - 10;
  return isFinite(result) ? round(result, 2) : 0;
};

const useMouthfill = () => {
  const [testPerformed, setTestPerformed] = useState<number>(0);
  const [testFailed, setTestFailed] = useState<number>(0);
  const [performed, setPerformed] = useState<number>(0);

  const setTestPerformedCallback = useCallback(
    (value: number) => {
      const normalizedVal = value > 0 ? value : 0;
      setTestPerformed(normalizedVal);
      if (testFailed < normalizedVal) {
        setTestFailed(normalizedVal);
      }
    },
    [testFailed],
  );

  const setTestFailedCallback = useCallback(
    (value: number) => {
      const normalizedVal = value > 0 ? value : 0;
      setTestFailed(normalizedVal);
      if (testPerformed > normalizedVal) {
        setTestPerformed(normalizedVal);
      }
    },
    [testPerformed],
  );

  const setPerformedCallback = useCallback((value: number) => setPerformed(value > 0 ? value : 0), []);

  return {
    testPerformed,
    setTestPerformed: setTestPerformedCallback,
    testFailed,
    setTestFailed: setTestFailedCallback,
    performed,
    setPerformed: setPerformedCallback,
    maxDepth: calculateMaxDepth(testPerformed, testFailed, performed),
  };
};

export default useMouthfill;
