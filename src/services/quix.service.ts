import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuixService {

  private token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qVTBRVE01TmtJNVJqSTNOVEpFUlVSRFF6WXdRVFF4TjBSRk56SkNNekpFUWpBNFFqazBSUSJ9.eyJodHRwczovL3F1aXguYWkvb3JnX2lkIjoicXVpeCIsImh0dHBzOi8vcXVpeC5haS9yb2xlcyI6ImFkbWluIFF1aXhBZG1pbiIsImlzcyI6Imh0dHBzOi8vYXV0aC5xdWl4LmFpLyIsInN1YiI6ImF1dGgwfGJjZmZmYTYyLTE1YTQtNDllYy05OWE0LWQ1Mjk5OTBkN2I1MSIsImF1ZCI6WyJxdWl4IiwiaHR0cHM6Ly9sb2dpY2FsLXBsYXRmb3JtLmV1LmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2Mzc2NzcyNTAsImV4cCI6MTY0MDI2OTI1MCwiYXpwIjoiMHptV2ZKZGtpdUdQaUpXeXBTQ0E4ckthVnZmUERLTEkiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOltdfQ.kmz620NAg4PM14w4SzlPe1va99spaMRH8SrQq1Z3YE_7yPu3tlkaR41cKmppJ9p4c2ZGRZjUpurd92p_5mSZhRLPF4FxcTk1T9dLv6fbx0a1p2QcgsU6QGlVav8fXTS_u5ysdsSci5AwidAso5I9-ZNce8fT_AO2FZQmOjuKiJS_oK62qemi42enbcReOrmfShlbRAw4I2eIfp6G-sM-aVuZo12L9cSWSvpJ4Ly-yYBDn_-AdgUA_2F_TbcFgxkTWL51p_OlLVEVGDTv_YNf1qhROrKyhsyUVV_UKDTA8IJQnYqdrbsGB64wQbfQQORm3LdOf6D45OagGAm4eox-lA";

  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any[]>{

    let body = {
      'groupByTime': {
        'timeBucketDuration': 407150881,
        'interpolationType': 'None'
      },
      'from': 1634742713707746300,
      'to': 1634742985793564700,
      'numericParameters': [
        {
          'parameterName': 'Speed',
          'aggregationType': 'Mean'
        }
      ],
      'stringParameters': [],
      'streamIds': [
        'f567893a-29ee-45c9-b87e-8ed1ca8d7720'
      ],
      'tagFilters': [],
      'eventIds': [],
      'aggregation': {
        'aggregationType': 'First',
        'interpolationType': 'None',
        'interval': 407150881
      }
    }

    return this.httpClient.post<any[]>(
      "https://telemetry-query-quix-gamedemo.platform.quix.ai/data/query",
      body,
      {
        headers: {
          'Authorization': 'bearer ' + this.token
        }
      }
    )
  }
}
