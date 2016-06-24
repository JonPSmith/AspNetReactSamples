import InnerFunction from './InnerFunction';
import InnerValue from './InnerValue';

export default function outer() {
    return {
        innerFuncValue: InnerFunction(),
        innerValue:InnerValue
    }
}