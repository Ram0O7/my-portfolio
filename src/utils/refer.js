const referToComponent = () => {
  const id = window.location.hash;
  document
    .querySelector(id)
    .scrollIntoView({ behavior: "smooth", block: "end" });
};

export default referToComponent;
