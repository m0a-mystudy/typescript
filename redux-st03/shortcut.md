【Mac版】 VisualStudioCode キーボードショートカット


⌘ Cmd
⌥ Option
⇧ Shift
^ Ctrl

---

### 基本操作

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ⌘X | 行の切り取り (未選択時) | editor.action.clipboardCutAction | 
| ⌘C | 行のコピー (未選択時) | editor.action.clipboardCopyAction | 
| ⇧⌘K | カーソル行削除 | editor.action.deleteLines |
| ⌘Enter | 下に行追加 | editor.action.insertLineAfter |
| ⇧⌘Enter | 上に行追加 | editor.action.insertLineBefore |
| ⌥↓ | カーソル行を下に移動 | editor.action.moveLinesDownAction |
| ⌥↑ | カーソル行を上に移動 | editor.action.moveLinesUpAction | 
| ⇧⌥↓ | カーソル行を下にコピー | editor.action.copyLinesDownAction | 
| ⇧⌥↑ | カーソル行を上にコピー | editor.action.copyLinesUpAction | 
| ⌘D | 次のマッチを選択に追加 | editor.action.addSelectionToNextFindMatch | 
| ⌘K ⌘D | 次のマッチに移動 | editor.action.moveSelectionToNextFindMatch | 
| ⌘U | カーソル動作のUndo | cursorUndo |
| ⇧⌘L | 選択部分の全マッチを選択 | editor.action.selectHighlights | 
| ⌘F2 | 選択ワードの全マッチを選択 | editor.action.changeAll |
| ⌥⌘↓ | カーソルを下に追加 | editor.action.insertCursorBelow |
| ⌥⌘↑ | カーソルを上に追加 | editor.action.insertCursorAbove |
| ⌘⌘] | 対応する括弧に移動 | editor.action.jumpToBracket |
| ⌘] | 行にインデントを追加 | editor.action.indentLines |
| ⌘[ | 行のインデントを削除 | editor.action.outdentLines |
| Home | 行の先頭に移動 | cursorHome | 
| End | 行の末尾に移動 | cursorEnd | 
| ⌘↓ | ファイルの末尾に移動 | cursorBottom | 
| ⌘↑ | ファイルの先頭に移動 | cursorTop | 
| ⌘K ⌘C | 行コメント記号を追加 | editor.action.addCommentLine |
| ⌘K ⌘U | 行コメント記号を削除 | editor.action.removeCommentLine |
| ⌘/ | 行コメント記号をトグル | editor.action.commentLine | 
| ⇧⌥A | ブロックコメント記号をトグル | editor.action.blockComment |
| ⌘F | 検索 | actions.find | 
| ⌥⌘F | 置換 | editor.action.startFindReplaceAction | 
| ⌘G | 次を検索 | editor.action.nextMatchFindAction | 
| ⇧⌘G | 前を検索 | editor.action.previousMatchFindAction | 
| ^⌘M | タブでフォーカス切り替えモードをトグル | editor.action.toggleTabFocusMode |

### リッチな言語エディット Rich Languages Editing 

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ^Space | サジェストを表示 | editor.action.triggerSuggest | 
| ⇧⌘Space | パラメーターヒントを表示 | editor.action.triggerParameterHints |
| ⇧⌥F | コードをフォーマット | editor.action.format | 
| F12 | 選択部分の定義に移動 | editor.action.goToDeclaration | 
| ⌥F12 | 選択部分の定義をプレビュー | editor.action.previewDeclaration |
| ⌘. | クイックフィックス | editor.action.quickFix |
| ⇧F12 | リファレンスを表示 | editor.action.referenceSearch.trigger |
| F2 | シンボルをリネーム | editor.action.rename |
| ⇧⌘. | 次の値で置換 | editor.action.inPlaceReplace.Down |
| ⇧⌘, | 前の値で置換 | editor.action.inPlaceReplace.up |
| ^⇧⌘→ | ASTセレクトを広げる | editor.action.smartSelect.grow |
| ^⇧⌘← | ASTセレクトを縮める | editor.action.smartSelect.shrink |
| ⇧⌘X | 行末尾のスペースを削除 | editor.action.trimTrailingWhitespace |
| ⌘K M | 言語モードを変更 | workbench.action.editor.changeLanguageMode |

### ナビゲーション  Navigation

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ⌘T | すべてのシンボルを表示 | workbench.action.showAllSymbols |
| ^G | 指定行に移動 | workbench.action.gotoLine | 
| ⌘P | 指定ファイルに移動 | workbench.action.quickOpen | 
| ⇧⌘O | 指定シンボルに移動 | workbench.action.gotoSymbol |
| ⇧⌘M | エラーと警告を表示 | workbench.action.showErrorsWarnings | 
| F8 | 次のエラーと警告に移動 | editor.action.marker.next |
| ⇧F8 | 前のエラーと警告に移動 | editor.action.marker.prev |
| F1 | すべてのコマンドを表示 | workbench.action.showCommands |
| ^Tab | ファイル履歴を表示 | workbench.action.openPreviousEditor | 
| ^- | 前に戻る | workbench.action.navigateBack |
| ^⇧- | 次に進む | workbench.action.navigateForward |

### エディター/ウィンドウ操作 Editor/Window Management

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ⇧⌘N | 新しいウィンドウを開く | workbench.action.newWindow |
| ⇧⌘W | ウィンドウを閉じる | workbench.action.closeWindow |
| ⌘W | エディターを閉じる | workbench.action.closeActiveEditor | 
| ⌘K F | フォルダーを閉じる | workbench.action.closeFolder |
| 未アサイン | エディター間で切り替え | workbench.action.cycleEditor |
| ⌘\ | エディターを分割する | workbench.action.splitEditor |
| ⌘1 | 左のエディターにフォーカス | workbench.action.focusFirstEditor | 
| ⌘2 | サイドエディターにフォーカス | workbench.action.focusSecondEditor | 
| ⌘3 | 右のエディターにフォーカス | workbench.action.focusThirdEditor | 
| ⌥⌘← | 左隣のエディターにフォーカス | workbench.action.focusLeftEditor |
| ⌥⌘→ | 右隣のエディターにフォーカス | workbench.action.focusRightEditor |
| ⌘K ← | アクティブなエディターを左に移動 | workbench.action.moveActiveEditorLeft |
| ⌘K → | アクティブなエディターを右に移動 | workbench.action.moveActiveEditorRight |

### ファイル操作 File Management

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ⌘N | 新しいファイル | workbench.action.files.newUntitledFile | 
| 未アサイン | ファイルを開く | workbench.action.files.openFile |
| ⌘S | 保存 | workbench.action.files.save |
| 未アサイン | すべて保存 | workbench.action.files.saveAll |
| ⇧⌘S | 名前を付けて保存 | workbench.action.files.saveAs |
| ⌘K W | ファイルを閉じる | workbench.files.action.closeFile |
| ⌘K ⌘W | すべてのファイルを閉じる | workbench.files.action.closeAllFiles |
| ⌘K Enter | 作業中ファイルに追加 | workbench.files.action.addToWorkingFiles |
| ⌘K ↓ | 次の作業中ファイルを開く | workbench.files.action.openNextWorkingFile |
| ⌘K ↑ | 前の作業中ファイルを開く | workbench.files.action.openPreviousWorkingFile |
| ⌘K P | アクティブなファイルのパスをコピー | workbench.action.files.copyPathOfActiveFile |
| ⌘K R | アクティブなファイルをエクスプローラーで表示 | workbench.action.files.revealActiveFileInWindows |
| ⌘K O | アクティブなファイルを新しいウィンドウで表示 | workbench.action.files.showOpenedFileInNewWindow |

### 画面表示 Display

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ^⌘F | フルスクリーン表示のトグル | workbench.action.toggleFullScreen |
| ⇧⌘= | ズームイン | workbench.action.zoomIn |
| ⇧⌘- | ズームアウト | workbench.action.zoomOut |
| ⌘B | サイドバー表示のトグル | workbench.action.toggleSidebarVisibility | 
| ⇧⌘D | デバッグ画面の表示 | workbench.view.debug |
| ⇧⌘E | エクスプローラーの表示 | workbench.view.explorer | 
| ^⇧G | Git画面の表示 | workbench.view.git | 
| ⇧⌘F | 検索画面の表示 | workbench.view.search | 
| ⇧⌘J | 詳細検索のトグル | workbench.action.search.toggleQueryDetails |
| ⇧⌘C | 新しいコマンドプロンプトを開く | workbench.action.terminal.openNativeConsole |
| ⇧⌘U | アウトプット画面を開く | workbench.action.output.toggleOutput |
| ⌘L L | OmniSharpログを開く | o.showOutput |
| ⇧⌘V | マークダウンのプレビュー表示をトグル | workbench.action.markDown.togglePreview | 
| ⌘K V | マークダウンのプレビューを横に表示 | workbench.action.markDown.openPreviewSideBySide |
| ⌃` | 統合ターミナルの表示をトグル | workbench.action.terminal.toggleTerminal | 

### 設定 Preferences 

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ⌘, | ユーザー設定を開く | workbench.action.openGlobalSettings | 
| 未アサイン | ワークスペース設定を開く | workbench.action.openWorkspaceSettings | 
| 未アサイン | ショートカット設定を開く | workbench.action.openGlobalKeybindings |
| 未アサイン | ユーザースニペットを開く | workbench.action.openSnippets |
| 未アサイン | カラーテーマ設定を開く | workbench.action.selectTheme |

### デバッグ Debug

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| F9 | ブレークポイントのトグル | editor.debug.action.toggleBreakpoint |
| F5 | コンティニュー | workbench.action.debug.continue |
| F5 | ポーズ | workbench.action.debug.start |
| F11 | ステップイン | workbench.action.debug.stepInto |
| ⇧F11 | ステップアウト | workbench.action.debug.stepOut |
| F10 | ステップオーバー | workbench.action.debug.stepOver |
| ⇧F5 | ストップ | workbench.action.debug.stop |

### タスク Tasks

| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| ⇧⌘B | ビルドタスクの実行 | workbench.action.tasks.build |
| ⇧⌘T | ランタスクの実行 | workbench.action.tasks.test |

### 拡張 Extensions
| キー | 動作 | コマンドID | 
|:--|:--|:--|:--|
| 未アサイン | 拡張のリスト表示 | workbench.extensions.action.listExtensions | 
| 未アサイン | 拡張のインストール | workbench.extensions.action.installExtension | 

---