## 绘制线条

### context.moveTo

把路径移动到画布中的指定点，不创建线条。

```javascript
context.moveTo(x, y);
```

- x，x 坐标
- y，y 坐标

注意点：

- 如果没有 moveTo，那么第一次 lineTo 的就视为 moveTo
- 每次 lineTo 后如果没有 moveTo，那么下次 lineTo 的开始点为前一次 lineTo 的结束点

### 线条样式

|样式|说明|
|----|----|
|lineWidth|设置或返回当前的线条宽度|
|lineCap|设置或返回线条的端点样式|
|lineJoin|设置或返回两条线相交时，所创建的拐角类型|
|miterLimit|设置或返回两条线相交时，所创建的拐角类型|
