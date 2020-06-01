import React from "react";

import CodeBlock from "./Code.Prism";
import styled from "styled-components";

function preToCodeBlock(preProps) {
  if (
    preProps.children &&
    preProps.children.props &&
    preProps.children.props.mdxType === "code"
  ) {
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : "",
      ...props,
    };
  }
}

const CodePre: React.FC<{}> = (preProps) => {
  const props = preToCodeBlock(preProps);
  const preStyle = {
    "background-color": "#eee",
    "color": "#333",
    "padding": "0.1em 0.4em",
    "font-family": 'SFMono-Regular,Consolas,"Liberation Mono",Menlo,Courier,monospace'
  }

  if (props) {
    return <CodeBlock {...props} />;
  } else {
    return <pre style={preStyle} {...preProps} />;
  }
};

export default CodePre;
