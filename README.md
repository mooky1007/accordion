# Accordion
간단한 아코디언을 생성해주는 라이브러리입니다.  
[데모 페이지](https://mooky1007.github.io/accordion/)

## 사용법

```html
<script src="https://mooky1007.github.io/accordion/js/accordionContainer.js"></script>
```

```html
<div class="accordion_container">
    <ul class="accordion_wrapper">
        <li class="accordion_item">
            <div class="accordion_title">Title 1</div>
            <div class="accordion_content">Content 1</div>
        </li>
        <li class="accordion_item">
            <div class="accordion_title">Title 2</div>
            <div class="accordion_content">Content 2</div>
        </li>
        <li class="accordion_item">
            <div class="accordion_title">Title 3</div>
            <div class="accordion_content">Content 3</div>
        </li>
    </ul>
</div>
```

```js
const accrdion = new Accordion(document.querySelector(".accordion_container"))
```
<br/>
<br/>

## Parameters
#### openAll : boolean || false
true일 경우 최초 생성 시 모든 아코디언 아이템을 열어둡니다.

#### multi : bollean || false
true일 경우 여러개의 아코디언 아이템을 펼칠 수 있습니다.

<br/>
<br/>

## Methods & Properties
#### accordion.openNum(idx)
idx번째 아코디언 아이템을 펼칩니다.

#### accordion.closeNum(idx)
idx번째 아코디언 아이템을 접습니다.

#### accordion.openAll()
모든 아코디언 아이템을 펼칩니다.

#### accordion.closeAll()
모든 아코디언 아이템을 접습니다.
