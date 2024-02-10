import serialize from "./serialize";

const RichText = ({ content }: { content: any }) => {
  if (!content) {
    return null;
  }

  return <>{serialize(content)}</>;
};

export default RichText;
