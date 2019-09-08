---
sidebar: auto
---


<a name="paths"></a>
## Paths

<a name="xfedeliverynotedatausingpost"></a>
### 下载收货单明细
```
POST /api/erpxfe/xfeDeliveryNoteData
```


#### Description
下载收货单明细


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**request**  <br>*required*|request|[XfeDataRequest](#xfedatarequest)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResultResponse«string»](#9e07d6fee61e5cdb8f5426985da81779)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* erp-xfe-controller


<a name="xfegrndetaildatausingpost"></a>
### 上传收货单明细
```
POST /api/erpxfe/xfeGrnData
```


#### Description
上传收货单明细


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**request**  <br>*required*|request|[XfeDataRequest](#xfedatarequest)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResultResponse«string»](#9e07d6fee61e5cdb8f5426985da81779)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* erp-xfe-controller


<a name="xfepodatausingpost"></a>
### 上传PO
```
POST /api/erpxfe/xfePoData
```


#### Description
上传PO


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**request**  <br>*required*|request|[XfeDataRequest](#xfedatarequest)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResultResponse«string»](#9e07d6fee61e5cdb8f5426985da81779)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* erp-xfe-controller


<a name="xferndatausingpost"></a>
### 上传退货单明细
```
POST /api/erpxfe/xfeRnData
```


#### Description
上传退货单明细


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**request**  <br>*required*|request|[XfeDataRequest](#xfedatarequest)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResultResponse«string»](#9e07d6fee61e5cdb8f5426985da81779)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* erp-xfe-controller


<a name="xfesupplierdatausingpost"></a>
### 上传供应商明细
```
POST /api/erpxfe/xfeSupplierData
```


#### Description
上传供应商明细


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**request**  <br>*required*|request|[XfeDataRequest](#xfedatarequest)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResultResponse«string»](#9e07d6fee61e5cdb8f5426985da81779)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* erp-xfe-controller


<a name="getxfenousingpost"></a>
### 获取传输单号
```
POST /api/xfe/getXfeNo
```


#### Description
获取传输单号


#### Parameters

|Type|Name|Description|Schema|
|---|---|---|---|
|**Body**|**request**  <br>*required*|request|[XfeDataRequest](#xfedatarequest)|


#### Responses

|HTTP Code|Description|Schema|
|---|---|---|
|**200**|OK|[ResultResponse«string»](#9e07d6fee61e5cdb8f5426985da81779)|
|**201**|Created|No Content|
|**401**|Unauthorized|No Content|
|**403**|Forbidden|No Content|
|**404**|Not Found|No Content|


#### Consumes

* `application/json`


#### Produces

* `\*/*`


#### Tags

* xfe-controller



