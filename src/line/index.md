# 绘制线条

## context.moveTo

把路径移动到画布中的指定点，不创建线条。

```javascript
ctx.moveTo(x, y);
```

- x，x 坐标
- y，y 坐标

注意点：

- 如果没有 moveTo，那么第一次 lineTo 的就视为 moveTo
- 每次 lineTo 后如果没有 moveTo，那么下次 lineTo 的开始点为前一次 lineTo 的结束点

## 线条样式

|样式|说明|
|----|----|
|lineWidth|设置或返回当前的线条宽度|
|lineCap|设置或返回线条的端点样式|
|lineJoin|设置或返回两条线相交时，所创建的拐角类型|
|miterLimit|设置斜接面限制比例的属性|

### lineWidth

示例：
```javascript
ctx.lineWidth = 15;
```

### lineCap

选项:
- butt，线段末端以方形结束，默认值
- round，线段末端以圆形结束
- square，线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域

示例：
```javascript
ctx.lineCap = 'round';
```

### lineJoin

选项:
- round，通过填充一个额外的，圆心在相连部分末端的扇形，绘制拐角的形状。圆角的半径是线段的宽度。
- bevel，在相连部分的末端填充一个额外的以三角形为底的区域，每个部分都有各自独立的矩形拐角。
- miter，通过延伸相连部分的外边缘，使其相交于一点，形成一个额外的菱形区域。这个设置可以通过 miterLimit 属性看到效果。默认值。

示例：
```javascript
ctx.lineJoin = 'round';
```

### miterLimit

初始值为 10.0。注意：0、负数、Infinity 和 NaN 都会被忽略

示例：
```javascript
ctx.miterLimit = 10;
```
