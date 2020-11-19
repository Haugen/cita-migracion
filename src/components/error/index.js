import { h } from 'preact';

const FailedRequestError = ({ error }) => {
  const buildError = () => {
    return (
      <>
        <p>Sorry, an error occurred: {error}</p>
      </>
    );
  };

  if (error) return buildError();
};

export default FailedRequestError;
