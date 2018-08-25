import * as CircuitBreaker from 'circuit-breaker-js';

const isFunction = (fn) => typeof fn === 'function';
const cbRegistry = [];

interface CircuitBreakerOptions {
    windowDuration:  number;
    numBuckets:      number;
    timeoutDuration: number;
    errorThreshold:  number;
    volumeThreshold: number;
    name:            string;
    onCircuitOpen:   () => {};
    onCircuitClose:  () => {};
}
/**
 * Make node http request by wrapping in circuit-breaker
 */