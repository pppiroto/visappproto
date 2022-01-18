Ctrl + Shift + v でプレビュー表示

# visappproto
web application prototype

# 準備
## git clone
git clone https://github.com/pppiroto/visappproto.git
- 本プロジェクト

## .NET Core 6.0
https://dotnet.microsoft.com/en-us/download/dotnet/3.1
- 上記から入手しインストール

## NPM
### Mac
- Homebrew インストール 
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
- nodebrew インストール
```
brew install nodebrew
```
- nodebrew にパスを通す
```
echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
```
- 最新バージョンをインストール
```
nodebrew install-binary latest
```
### Windows
- nvm-windows
https://blog.clock-up.jp/entry/2018/02/10/nodejs-manager-on-windows
- インストーラーのDownload (nvm-setup.zip) 解凍してインストール
https://github.com/coreybutler/nvm-windows/releases

## Angular
- https://angular.jp/
- dotnet new angular でプロジェクトにAngular CLI(ng)がインストールされるので、それを使用する場合
```
npm run ng --version
```
- Angular CLI をグローバルにインストール
```
$ npm run ng --version
8.3.1
$ npm install -g @angular/cli@8.3.1
```

### Build / Run
- ClinentApp/dist が生成される
```
$ ng build
$ ng serve
```

### E2Eテスト
- ng e2e
[Protractor](http://www.protractortest.org/)を使用したエンドツーエンドテスト

# .NET Core テンプレート
## ASP.Net with Angular
https://docs.microsoft.com/ja-jp/dotnet/core/tools/dotnet-new-sdk-templates#spa

- カレントディレクトリにプロジェクトを生成
```
$ dotnet new angular -o . 
```
## 実行(Hello world と サンプル)
```
$ dotnet watch run
```
- https://localhost:5001/

<img src="./readme_images/01_aspdotnet_angular.png" width="400">

- Angular : ClinentApp/src/app/counter Sample

<img src="./readme_images/02_counter_sample.png" width="400">

- Angular : ClientApp/src/app/fetch-data Sample
- ASP.NET Core : Controllers/WeatherForcastController.cs

<img src="./readme_images/03_datafetch_sample.png" width="400">

# 開発
```
$ cd ClientApp/src/app
```
## ng generate サブコマンド
| 要素 | コマンド |
----|---- 
|モジュール|ng g moduole {{name}}|
|コンポーネント|ng g component {{name}}|
|ディレクティブ|ng g directive {{name}}|
|パイプ|ng g pipe {{name}}|
|サービス|ng g service {{name}}|
|ガード|ng g guard {{name}}|
|クラス|ng g class {{name}}|
|インターフェース|ng g interface {{name}}|
|列挙|ng g enum {{name}}|

## component 追加
- main-frame コンポーネントを追加
```
$ cd ClientApp
$ ng g component main-frame --module=app.module
CREATE src/app/main-frame/main-frame.component.css (0 bytes)
CREATE src/app/main-frame/main-frame.component.html (25 bytes)
CREATE src/app/main-frame/main-frame.component.spec.ts (650 bytes)
CREATE src/app/main-frame/main-frame.component.ts (284 bytes)
UPDATE src/app/app.module.ts (1267 bytes)
```
- app.module.ts に参照が追記される
- RouteModule.forRoot に追記
```
  imports: [
        ：
    RouterModule.forRoot([
        ：
      { path: 'main', component: MainFrameComponent },
    ])
  ],
  ```

  - nav-menu.component.html にリンクを追加
  ```
            <li class="nav-item" [routerLinkActive]="['link-active']">
            <a class="nav-link text-dark" [routerLink]="['/main']"
              > Main</a
            >
          </li>
  ```

- Home画面のメニューにMainを追加

<img src="./readme_images/04_add_menu.png" width="400">

- Mainクリックで作成したコンポーネント画面に遷移

<img src="./readme_images/05_new_window.png" width="400">


# Wijimo
- https://www.grapecity.co.jp/developer/wijmo?utm_medium=link&utm_source=demo-wijm

## NPM によるインストール(Angularコンポーネント)
- https://demo.grapecity.com/wijmo/docs/GettingStarted/Angular-Components
- https://demo.grapecity.com/wijmo/docs/GettingStarted/Referencing-Wijmo-NPM

```
$ cd ClientApp
$ npm install @grapecity/wijmo.angular2.all
```

## VS Code 用 デザイナ (Wijmo Designer)
- https://marketplace.visualstudio.com/items?itemName=GrapeCityinc.gc-wijmo-designer

<video controls="controls" width="600">
  <source src="./readme_images/06_wijmo_component.mov">
</video>

## Demo
- https://demo.grapecity.com/wijmo/demos/Input/Calendar/Overview/angular

