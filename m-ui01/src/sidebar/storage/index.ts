import { fetchStorage, saveStorage } from '../../common/helper';
import { TransPair, Content } from 'taiyaku-node';

export interface ContentInfo {
  contentList: { [id: string]: Content };
  selectId: string;
  selectIdList?: string[];
}


export async function savePairs(savePairs: TransPair[], url: string) {
  let contentInfo = await fetchStorage<ContentInfo>(url);
  if (!contentInfo) {
    throw new Error('notfound content Info');
  }
  contentInfo.contentList[contentInfo.selectId].pairs.forEach(pair => {
    savePairs.forEach(savePair => {
      if (
        pair.hash === savePair.hash &&
        pair.nextHash === savePair.nextHash &&
        pair.prevHash === savePair.prevHash) {

        pair.translation = savePair.translation;
        pair.dontTranslate = savePair.dontTranslate;
      }
    });
  });
  await saveStorage(url, contentInfo);
}
