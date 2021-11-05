---
title: Piping Component
---

# Pipe
Pipe dimension is described the outside diameter (`OD`), thickness and unit weight (`wt`) in accordance with ASME and JIS standard.

![Pipe Drawing](.vitepress/images/pipe.png)

**Contents** 💬

[[toc]]

## Quick Comparison :eyes:

::: tip Note
- OD = Outside Diameter (mm).
- wt = Unit weight (kg/m). The below value are based on material Carbon Steel with SCH40 for ASME pipe and SGP for JIS pipe.
:::

<xlsx-reader TableName="PipeCompare" Header="| NPS |ASTM < wta | JIS <  wtj |"/>

## 📗 ASME CS Pipe
In accordance with ASTM B36.10M Welded and Seamless Wrought Steel Pipe

::: tip Note
- `OD` = Outside Diameter (mm).
- Plain text = Thickness (mm), _Italic text_ = Unit weight (kg/m).
- Unit weight are calculated based on CS material (density = 7850 kg/m<sup>3</sup>).
:::

<xlsx-reader TableName="PipeASMECS" Header="|NPS | OD | SCH5 < wt5 | SCH10 < wt10 | SCH20 < wt20 | SCH30 < wt30 | SCH40 < wt40 | SCH60 < wt60 | SCH80 < wt80 | SCH100 < wt100 | SCH120 < wt120 | SCH140 < wt140 | SCH160 < wt160 | STD < wtSTD | XS < wtXS | XXS < wtXXS | NPS|" />

## 📗 ASME SS Pipe
In accordance with ASTM B36.19M Stainless Steel Pipe

::: tip Note
- OD = Outside Diameter (mm).
- Plain text = Thickness (mm), _Italic text_ = Unit weight (kg/m).
- Unit weight are calculated based on SS304 material (density = 8000 kg/m<sup>3</sup>).
:::

<xlsx-reader TableName="PipeASMESS" Header="|NPS | OD | SCH5S < wt5S | SCH10S < wt10S | SCH40S < wt40S | SCH80S < wt80S |" />

## 📙 JIS CS Pipe
In accordance with JIS G3452 Carbon steel pipes for ordinary piping

<xlsx-reader TableName="PipeJISCS" Header="|NPS | OD | thkJ < wtJ|"/>

## 📙 JIS SS Pipe
In accordance with JIS G3459 Stainless steel pipes

::: tip Note
- OD = Outside Diameter (mm).
- Plain text = Thickness (mm), _Italic text_ = Unit weight (kg/m).
- Unit weight are calculated based on SS304 material (density = 8000 kg/m<sup>3</sup>).
:::

<xlsx-reader TableName="PipeJISSS" Header="|NPS | OD | SCH5S < wt5S | SCH10S < wt10S | SCH20S < wt20S | SCH40S < wt40S | SCH80S < wt80S |SCH120S < wt120S | SCH160S < wt160S|"/>
