# Simple Like

Um simples like pra usar onde quiser.

## Como usar

Copiar o iframe abaixo trocando `<url>` pela URL que deverá receber o like:

```
<iframe src="https://simple-like.appspot.com/like/?url=<url>" width="78" height="78" frameBorder="0"></iframe>
```

Por exemplo:
```
<iframe src="https://simple-like.appspot.com/like/?url=http://lucasinocente.com" width="78" height="78" frameBorder="0"></iframe>
```

Se você usa Jekyll:

```
<iframe src="https://simple-like.appspot.com/like/?url={{ site.url }}{{ page.url }}" width="78" height="78" frameBorder="0"></iframe>
```
