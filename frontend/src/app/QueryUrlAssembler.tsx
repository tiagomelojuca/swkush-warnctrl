interface QueryOptions {
  infrator: string | undefined | null;
  relator: string | undefined | null;
  conteudo: string | undefined | null;
};

class QueryUrlAssembler {
    public Execute(baseURL: string, params: QueryOptions | undefined | null): string {
        if (!params) {
            return baseURL;
        }

        let url = baseURL;

        if (params.infrator || params.relator || params.conteudo) {
          url += '?';
        }
      
        if (params.infrator) {
          url += `infrator=${params.infrator}`;
      
          if (params.relator || params.conteudo) {
            url += '&';
          }
        }
      
        if (params.relator) {
          url += `relator=${params.relator}`;
      
          if (params.conteudo) {
            url += '&';
          }
        }
      
        if (params.conteudo) {
          url += `conteudo=${params.conteudo}`;
        }
      
        // console.log(`[log] Query URL: ${url}`);
      
        return url;
    }
}

export type { QueryOptions };
export { QueryUrlAssembler };
