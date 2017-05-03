import { Content, TransPair } from 'taiyaku-node';

// message種別
type toggleSidebar = 'toggleSidebar';
type translatePair = 'translatePair';
type translateContent = 'translateContent';
type newContent = 'newContent';
type translateReady = 'translateReady';
type changeURL = 'changeURL';
// type downloadContent = 'downloadContent';


export type ExtensionMessage =
  /**
   * スライドバーの開閉
   */
  {
    callFunction: toggleSidebar;
  } |

  /**
   * 翻訳処理の実行(1Pairのみ)
   */
  {
    callFunction: translatePair;
    pair: TransPair;
  } |
  /**
   * 翻訳処理の実行(Contentすべて)
   */

  {
    callFunction: translateContent;
    content: Content;
  } |
  /**
   * 新規コンテンツ(翻訳リストの作成)
   */
  {
    callFunction: newContent
  } |

  /**
   * 翻訳の準備
   */
  {
    callFunction: translateReady
  } |
  /**
   * url変更通知
   */
  {
    callFunction: changeURL
    url: string
  }
  // |
  // {
  //   callFunction: downloadContent
  //   url: string
  //   selectId?: string
  // }

  ;

// responseType種別
type success = 'success';


export type ExtensionMessageResponse =
  {
    responseType: success
  } |
  {
    responseType: 'test';
    message: string;
  } | {
    responseType: translateReady;
  };

