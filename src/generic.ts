function dontKnowType<T>(param: T) {
  return {
    param,
  };
}

const knowType = dontKnowType(10);

interface Skills<T> {
  list: T[];
}

const skills: Skills<string> = {
  list: ["typescript", "javascript", "redux"],
};
