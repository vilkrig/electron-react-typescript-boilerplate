import { onCLS, onFCP, onFID, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: any) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onFCP(onPerfEntry);
    onTTFB(onPerfEntry)
  }
};

export default reportWebVitals;