import { ExtensionMessage, ExtensionMessageResponse } from './message';

export function sendMessageToContent(message: ExtensionMessage): Promise<ExtensionMessageResponse> {

  return new Promise<ExtensionMessageResponse>((resolve) => {
  });
}

// export function extensionAddListener(cb: (request: ExtensionMessage,
//   sender: chrome.runtime.MessageSender,
//   sendResponse: (response: ExtensionMessageResponse) => void)
//   => void) {


// }



export function fetchStorage<T>(key: string | null): Promise<T | undefined> {
  return new Promise<T>((resolve) => {
    // console.log(`key = '${key}'`);
    // chrome.storage.local.get(key, function (items) {
    //   // console.log(`chrome.storage.local.get = items= ${JSON.stringify(items[key])}`);
    //   if (key) {
    //     resolve(<T | undefined>items[key]);
    //   } else {
    //     resolve(<T | undefined>items);
    //   }

    // });
  });
}


export function saveStorage<T>(key: string, saveData: T): Promise<void> {
  return new Promise<void>((resolve) => {
    // chrome.storage.local.set({ [key]: saveData }, () => {
    //   console.log('in chrome.storage.local.set');
    //   resolve();
    // });
  });
}


export function download(data: any, filename: string) {
  let blob = new Blob([data], { 'type': 'octet/stream' });
  let a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob);
  a.download = `${filename}.json`;
  a.click();
}
