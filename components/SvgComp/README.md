<!-- TOC -->

- [SVG](#svg)
<!-- TOC -->

# SVG

    属性

1. preserveAspectRatio、viewBox、xmIns ( 只能在标签上进行修改的属性,不能通过CSS修改 )
2. width height x y fill stroke stroke-width transform opacity

```
 <!--
     preserveAspectRatio=
     网格线
      xMin xMid XMax
                     YMin
                     YMid
                     YMax
      第一个参数 xMidYMid ( 默认值 )
      第二个参数 meet
        slice ( 裁切层完全覆盖svg区域 )
        meet ( 某一方向撑满 默认值 )
    -->
```
