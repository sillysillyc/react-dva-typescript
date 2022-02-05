interface ConnectStateI<T = any> {
  loading: {
    effects: {
      /**
       * [modelName/effectName]: boolean
       * [modelName/actionName]: boolean
       */
      [key: string]: boolean;
    };
    [key: string]: any;
  };
}

declare module '*.less' {
  const value: { [key: string]: string };
  export default value;
}

declare module 'dva-loading' {
  const createLoading: Function;
  export default createLoading;
}
