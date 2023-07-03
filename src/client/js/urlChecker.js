function checkUrl(inputText) {
  const urlRegex = new RegExp(/^(http|https):\/\/[^ "]+$/);
  return urlRegex.test(inputText);
}

export { checkUrl };
