const themeResolver = (theme: string, lightChoice: any, darkChoice: any): any => theme === 'light' ? lightChoice : darkChoice;

export {
  themeResolver
}