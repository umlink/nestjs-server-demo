export class TemplateItemVO {
  id: string;
  code: string;
  title: string;
  content: JSON;
  headerImg: string;
  isVip: number;
  useCount: number;
}

export class TemplateListVo {
  list: TemplateItemVO[];
  total: number;
  pageNum: number;
  pageSize: number;
}
