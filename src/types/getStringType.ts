function getStringType(name: string): string {
  // TODO: move checking color to separate function and make it maybe regex?
  switch (name) {
    case 'color':
    case 'backgroundColor':
    case 'bgColor':
      return '#ffffff';
    default:
      return 'testing string';
  }
}

export default getStringType;
