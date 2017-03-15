module.exports = {
    AnyTypeAnnotation: [],
    ArrayExpression: ['elements'],
    ArrayPattern: ['elements', 'typeAnnotation'],
    ArrayTypeAnnotation: ['elementType'],
    ArrowFunctionExpression: ['params', 'body', 'returnType'],
    AssignmentExpression: ['left', 'right'],
    AssignmentPattern: ['left', 'right'],
    AwaitExpression: ['argument'],
    BinaryExpression: ['left', 'right'],
    BindExpression: ['object', 'callee'],
    BlockStatement: ['body'],
    BooleanLiteralTypeAnnotation: [],
    BooleanTypeAnnotation: [],
    BreakStatement: ['label'],
    CallExpression: ['callee', 'arguments'],
    CatchClause: ['param', 'body'],
    ClassBody: ['body'],
    ClassDeclaration: ['id','body', 'superClass', 'typeParameters', 'superTypeParameters', 'implements', 'decorators'],
    ClassExpression: ['id', 'body', 'superClass', 'typeParameters', 'superTypeParameters', 'implements', 'decorators'],
    ClassImplements: ['id', 'typeParameters'],
    ClassProperty: ['key', 'value', 'typeAnnotation', 'decorators'],
    ComprehensionBlock: ['left', 'right'],
    ComprehensionExpression: ['filter', 'blocks', 'body'],
    ConditionalExpression: ['test', 'consequent', 'alternate'],
    ContinueStatement: ['label'],
    DebuggerStatement: [],
    DeclareClass: ['id', 'typeParameters', 'extends', 'body'],
    DeclareFunction: ['id'],
    DeclareModule: ['id', 'body'],
    DeclareVariable: ['id'],
    Decorator: ['expression'],
    DoExpression: ['body'],
    DoWhileStatement: ['body', 'test'],
    EmptyStatement: [],
    ExportAllDeclaration: ['source', 'exported'],
    ExportDefaultDeclaration: ['declaration'],
    ExportDefaultSpecifier: ['exported'],
    ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
    ExportNamespaceSpecifier: ['exported'],
    ExportSpecifier: ['local', 'exported'],
    ExpressionStatement: ['expression'],
    File: ['program'],
    ForInStatement: ['left', 'right', 'body'],
    ForOfStatement: ['left', 'right', 'body'],
    ForStatement: ['init', 'test', 'update', 'body'],
    FunctionDeclaration: ['id', 'params', 'body', 'returnType', 'typeParameters'],
    FunctionExpression: ['id', 'params', 'body', 'returnType', 'typeParameters'],
    FunctionTypeAnnotation: ['typeParameters', 'params', 'rest', 'returnType'],
    FunctionTypeParam: ['name', 'typeAnnotation'],
    GenericTypeAnnotation: ['id', 'typeParameters'],
    Identifier: ['typeAnnotation'],
    IfStatement: ['test', 'consequent', 'alternate'],
    ImportDeclaration: ['specifiers', 'source'],
    ImportDefaultSpecifier: ['local'],
    ImportNamespaceSpecifier: ['local'],
    ImportSpecifier: ['local', 'imported'],
    InterfaceDeclaration: ['id', 'typeParameters', 'extends', 'body'],
    InterfaceExtends: ['id', 'typeParameters'],
    IntersectionTypeAnnotation: ['types'],
    JSXAttribute: ['name', 'value'],
    JSXClosingElement: ['name'],
    JSXElement: ['openingElement', 'closingElement', 'children'],
    JSXEmptyExpression: [],
    JSXExpressionContainer: ['expression'],
    JSXIdentifier: [],
    JSXMemberExpression: ['object', 'property'],
    JSXNamespacedName: ['namespace', 'name'],
    JSXOpeningElement: ['name', 'attributes'],
    JSXSpreadAttribute: ['argument'],
    LabeledStatement: ['label', 'body'],
    Literal: [],
    LogicalExpression: ['left', 'right'],
    MemberExpression: ['object', 'property'],
    MetaProperty: ['meta', 'property'],
    MethodDefinition: ['key', 'value', 'decorators'],
    MixedTypeAnnotation: [],
    NewExpression: ['callee', 'arguments'],
    Noop: [],
    NullableTypeAnnotation: ['typeAnnotation'],
    NumberLiteralTypeAnnotation: [],
    NumberTypeAnnotation: [],
    ObjectExpression: ['properties'],
    ObjectPattern: ['properties', 'typeAnnotation'],
    ObjectTypeAnnotation: ['properties', 'indexers', 'callProperties'],
    ObjectTypeCallProperty: ['value'],
    ObjectTypeIndexer: ['id', 'key', 'value'],
    ObjectTypeProperty: ['key', 'value'],
    ParenthesizedExpression: ['expression'],
    Program: ['body'],
    Property: ['key', 'value', 'decorators'],
    QualifiedTypeIdentifier: ['id', 'qualification'],
    RestElement: ['argument', 'typeAnnotation'],
    ReturnStatement: ['argument'],
    SequenceExpression: ['expressions'],
    SpreadElement: ['argument'],
    SpreadProperty: ['argument'],
    StringLiteralTypeAnnotation: [],
    StringTypeAnnotation: [],
    Super: [],
    SwitchCase: ['test', 'consequent'],
    SwitchStatement: ['discriminant', 'cases'],
    TaggedTemplateExpression: ['tag', 'quasi'],
    TemplateElement: [],
    TemplateLiteral: ['quasis', 'expressions'],
    ThisExpression: [],
    ThrowStatement: ['argument'],
    TryStatement: ['block', 'handlers', 'handler', 'guardedHandlers', 'finalizer'],
    TupleTypeAnnotation: ['types'],
    TypeAlias: ['id', 'typeParameters', 'right'],
    TypeAnnotation: ['typeAnnotation'],
    TypeCastExpression: ['expression', 'typeAnnotation'],
    TypeofTypeAnnotation: ['argument'],
    TypeParameterDeclaration: ['params'],
    TypeParameterInstantiation: ['params'],
    UnaryExpression: ['argument'],
    UnionTypeAnnotation: ['types'],
    UpdateExpression: ['argument'],
    VariableDeclaration: ['declarations'],
    VariableDeclarator: ['id', 'init'],
    VoidTypeAnnotation: [],
    WhileStatement: ['test', 'body'],
    WithStatement: ['object', 'body'],
    YieldExpression: ['argument']
};
