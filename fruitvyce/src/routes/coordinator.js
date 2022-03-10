export const goToList = (history) => {
  history.push("/list");
};

export const goToCart = (history) => {
  history.push("/cart");
};

export const goToInformation = (history, name) => {
  history.push(`/information/${name}`);
};

