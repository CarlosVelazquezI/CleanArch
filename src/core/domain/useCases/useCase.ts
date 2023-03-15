export interface Usecase<T> {
    run(...args: any[]): Promise<T>;
}

