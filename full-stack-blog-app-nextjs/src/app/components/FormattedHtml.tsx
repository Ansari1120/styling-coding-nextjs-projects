import React from "react";

interface FormattedHTMLProps {
  content: string;
}

const FormattedHTML: React.FC<FormattedHTMLProps> = ({ content }) => {
  return <div className="pt-2" dangerouslySetInnerHTML={{ __html: content }} />;
};

export default FormattedHTML;
