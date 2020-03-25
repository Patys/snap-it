import * as ts from 'typescript'

export interface TestPropsInfo {
  name: string;
  documentation: string;
  type: string;
  required: boolean;
}

export function serializeSymbol(symbol: ts.Symbol, checker: ts.TypeChecker): TestPropsInfo {
  return {
    name: symbol.getName(),
    documentation: ts.displayPartsToString(symbol.getDocumentationComment(checker)),
    type: checker.typeToString(
      checker.getTypeOfSymbolAtLocation(symbol, symbol.valueDeclaration!)
    ),
    // @ts-ignore
    required: !symbol.valueDeclaration.questionToken
  };
}
