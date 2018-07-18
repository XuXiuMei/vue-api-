import apiUtils from '../../index';
let domain = apiUtils.domain.pms;
export async function getDataRangeList(pageConf,params) {   //舍后sku删除
  const url = pageConf ? `${domain}/api/permission/authdatarange/list` + pageConf : `${domain}/api/permission/authdatarange/list`;
  let result = await apiUtils.post(url,{...params});
  return result;
}

export async function dataRangelistAdd(params) {  //新增
  let result = await apiUtils.post(`${domain}/api/permission/authdatarange/save`,{...params});
  return result;
}

export async function dataRangelistDelete(params) {  //删除
  let result = await apiUtils.post(`${domain}/api/permission/authdatarange/delete`,params);
  return result;
}

export async function dataRangelisttUpdate(params) {  //修改
  let result = await apiUtils.post(`${domain}/api/permission/authdatarange/update`,{...params});
  return result;
}

