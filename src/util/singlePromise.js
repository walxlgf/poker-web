


const Pending = 'pending';
const Fulfilled = 'fulfilled';
const Rejucted = 'rejucted';

// 最简单版本的Promise
export default class MyPromise {

    constructor(handle) {
        if (typeof handle !== 'function') {
            throw new Error('必须传函数')
        }
        this.status = Pending;
        this.value = undefined;
        this.reason = undefined;
        this.resolveCallBacks = [];
        this.rejectCallBacks = [];
        handle(this.__resolve, this.__reject);
    }

    then = (onResolved, onRejected) => {
        if (typeof onResolved === 'function' && this.status === Fulfilled) {
            onResolved(this.value);
        } else if (typeof onRejected === 'function' && this.status === Rejucted) {
            onRejected(this.reason);
        }
        if (this.status === Pending) {
            if (typeof onResolved === 'function') {
                this.resolveCallBacks.push(onResolved)
            }
            if (typeof onRejected === 'function') {
                this.rejectCallBacks.push(onRejected)
            }
        }
    }

    static all = (list) => {
        return new MyPromise((resolve, reject) => {
            let results = [];
            for (let index = 0; index < list.length; index++) {
                const promise = list[index];
                promise.then(data => {
                    results.push(data);
                    if (results.length === list.length) {
                        resolve(results);
                    }
                }, err => {
                    reject(err)
                })
            }
        })
    }

    static race = (list) => {
        return new MyPromise((resolve, reject) => {
            list.forEach(p => {
                p.then(data => {
                    resolve(data);
                }, err => {
                    reject(err)
                })
            })
        })
    }

    __resolve = (data) => {
        if (this.status === Pending) {
            this.status = Fulfilled;
            this.value = data;
            this.resolveCallBacks.forEach(fn => fn(data));
        }
    }

    __reject = (err) => {
        if (this.status === Pending) {
            this.status = Rejucted;
            this.reason = err;
            this.rejectCallBacks.forEach(fn => fn(err));
        }
    }
}

let p = new MyPromise(() => { })

console.log(p);