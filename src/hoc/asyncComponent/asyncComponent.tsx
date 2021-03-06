import React, { useState, useEffect } from "react";

const asyncComponent = (importComponent) => {
  return (props) => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
      const g: Function = async (): Promise<void> => {
        await importComponent().then((cmp) => setComponent(cmp.default));
      };

      g();
    }, []);

    const C = component;
    return C ? <C {...props} /> : null;
  };
};

export default asyncComponent;
