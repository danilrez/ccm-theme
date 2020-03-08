<p align="center"><img width="800px" src="https://sun1-93.userapi.com/f08-ej5fxtLVZmfbG60vus0c_Hn5sEUB2xERqg/CmW6rdOKqSg.jpg"></p>

> This theme is based on Dark+ (default dark) and adjusts colors for
> block comments, line comments, language constants, operator keywords, expression keywords, and hint diagnostic ellipses.
> And with improved color contrast for editing React/JSX code.

>`To instal this theme put this folder to:"~\Microsoft VS Code\extensions"`

<p align="center"><img width="800px" src="https://sun1-91.userapi.com/gaMHJLCrOpGe9ERoIvOqCid9wbSaoraNQ78XAQ/2FKOY_jD3eQ.jpg"></p>

## Customizing

> You can customize the colors used by `yourself + extension "Scope"` by overriding it in your config file.

```json
"textMateRules": [
    {
        "scope": "entity.name.type.scope",
        "settings": {
            "foreground": "#FF0000"
        }
    }
]
```

### Note

> _Use `F1` -> `Developer: Inspect TM Scopes` to inspect TM scopes._

| Token Type   | TM Scope                                                    |
| ------------ | ----------------------------------------------------------- |
| Aggregators  | support.function.scope                                      |
| Comments     | comment.line.double-dash.scope, comment.block.scope         |
| Constructor  | entity.name.type.scope                                      |
| Functions    | support.function.scope                                      |
| Keywords     | keyword.scope                                               |
| Parameters   | variable.parameter.scope                                    |
| Preprocessor | meta.preprocessor.scope                                     |
| Types        | keyword.scope, entity.name.type.scope                       |
| Strings      | string.quoted.double.scope, constant.character.escape.scope |
