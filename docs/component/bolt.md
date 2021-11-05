---
title: Piping Component
---

# BOLT & NUT

## Bolt lengths calculation

Reference from Appendix C - ASME B16.5

![Bolt](../.vitepress/images/bolt.png)

```
LCSB = 2( Tf + t + d ) + G + F + n
```
::: warning WHERE
- `LCSB` = calculated stud bolt length (effective thread length, excluding end points)
- `LSSB` = specified stud bolt length (effective thread length, excluding end points), which is L<sub>CSB</sub> rounded off to the nearest 5-mm increment
- `Tf` = minimum flange thickness
- `t` = flange thickness positive tolerance :arrow_heading_down:
  - _ASME B16.5_
    - NPS ≤ 18  = `3.0 mm`
    - 20 ≤ NPS ≤ 24  = `5.0 mm`
  - _ASME B16.47_
    - `Tf` ≤ 25.4mm = `3.0 mm`
    - 25.4mm ≤ `Tf` ≤ 50.8mm = `5.0 mm`
    - 50.8mm ≤ `Tf` ≤ 76.2mm = `8.0 mm`
    - `Tf` > 76.2mm = `10.0 mm`
- `d` = heavy nut thickness (equals nominal bolt diameter)
- `G` = gasket thickness
- `F` = total height of facing or ring groove for both flange
- `n` = negative tolerance on bolt length :arrow_heading_down: where `A = 2( Tf + t + d ) + G + F`
  - `A` ≤ 305mm = `1.5 mm`
  - 305mm ≤ `A` ≤ 460mm = `3.0 mm`
  - 460mm ≤ `A` = `7.0 mm`
:::

## CLASS 150 (B16.5 RF/FF)

<xlsx-reader TableName="BOLT_RF_150" />

<!-- ## CLASS 150 (B16.47 RF)

<xlsx-reader TableName="BOLT_LRF_150" /> -->

<hr />

## CLASS 300 (B16.5 RF/FF)

<xlsx-reader TableName="BOLT_RF_300" />

<!-- ## CLASS 300 (B16.47 RF)

<xlsx-reader TableName="BOLT_LRF_300" />

<hr /> -->

