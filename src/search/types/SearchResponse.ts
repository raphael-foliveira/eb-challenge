export interface SearchResponse {
  success: boolean;
  responseCodes: any[];
  data: Datum[];
  type: null;
}

export interface Datum {
  stId: number;
  xid: string;
  stN: string;
  iconId: number;
  pid: number;
  mdt: number;
  cmt: number;
  lvt: boolean;
  fCnt: number;
  oCnt: number;
  aCnt: number;
  ord: number;
  cs: C[];
  stSURL: string;
}

export interface C {
  cId: number;
  xid: string;
  cN: string;
  fCnt: number;
  oCnt: number;
  aCnt: number;
  ord: number;
  iso: string;
  sns: Sn[];
  cSURL: string;
}

export interface Sn {
  sId: number;
  lId: number;
  seaN: string;
  cshOut: boolean;
  lord: number;
  seaSURL: string;
  lName: string;
  fCnt: number;
  oCnt: number;
  aCnt: number;
  fs: F[];
}

export interface F {
  fId: number;
  fsd: number;
  cshOut: boolean;
  ante: boolean;
  hcId?: number;
  hcBId?: string;
  hcCIC?: string;
  acId?: number;
  acBId?: string;
  acCIC?: string;
  hcN: string;
  acN?: string;
  xid?: string;
  lxid: string;
  lbO: boolean;
  lSt: boolean;
  vld: boolean;
  frz: boolean;
  ssid?: number;
  fDS: number;
  mmp: number;
  mDat?: MDAT;
  mCod: number;
  btgs: Btg[];
  afed?: number;
  fNBSD?: number;
}

export interface Btg {
  btgId: number;
  btgN: string;
  mrkp: string;
  btgNO: string;
  btgMId?: number;
  btgMN?: string;
  btgMOrd?: number;
  ptn?: string;
  pto?: number;
  mbtgMId?: number;
  mbtgMN: string;
  mbtgMOrd?: number;
  hsd?: Hsd[];
  dt: number[];
  ddt?: number;
  prm: boolean;
  cshOut: boolean;
  ord?: number;
  fos: Fo[];
  lineItem: boolean;
  cvp?: number;
}

export interface Fo {
  foId: number;
  btId: number;
  btN: BTN;
  valid: boolean;
  tvalid: boolean;
  freeze: boolean;
  prm: boolean;
  lineItem: boolean;
  hO: number;
  hSh: string;
  pSh?: string;
  oc?: string;
  tmId: number;
  hSDId?: number;
  sv?: string;
  mCId?: number[];
}

export enum BTN {
  BothTeamsToScore = 'Both teams to score',
  Casa = 'Casa',
  Empate = 'Empate',
  Fora = 'Fora',
  FreeTextMultiwinnerMarket = 'Free text multiwinner market',
  OutrightWinner = 'Outright Winner',
  Total = 'Total',
}

export interface Hsd {
  id: number;
  name: string;
  ord: number;
}

export interface MDAT {
  st: string;
  sud: number;
}
