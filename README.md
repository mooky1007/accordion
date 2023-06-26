# Accordion
간단한 아코디언을 생성해주는 라이브러리입니다.

## 사용법
```html
    <div class="accordion_container">
        <ul class="accordion_wrapper">
            <li class="accordion_item active">
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
