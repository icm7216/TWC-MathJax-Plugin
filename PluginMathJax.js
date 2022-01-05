/***
|''Name:''|PluginMathJax|
|''Description:''|Enable LaTeX formulas for TiddlyWiki|
|''Author:''|icm7216 aka babooshka|
|''Version:''|1.1.10|
|''Date:''|Jan. 05, 2022|
|''Requires''|[[MathJax|http://www.mathjax.org/]]|
|''Source''|[[icm7216/TWC-MathJax-plugin|https://github.com/icm7216/TWC-MathJax-plugin]]|
|''License:''|[[MIT|https://opensource.org/licenses/MIT]]|
|''~CoreVersion:''|2.5.0|
|''Change log''|(write in Japanese) [[icm7216/TWC-MathJax-plugin/CHANGES.md|https://github.com/icm7216/TWC-MathJax-plugin/blob/master/CHANGES.md]]|


This plugin are adapted from {{{latex-for-tiddlywiki-a-mathjax-plugin}}} (on [[LaTeX for TiddlyWiki – A MathJax Plugin - Guy Rutenberg|https://www.guyrutenberg.com/2011/06/25/latex-for-tiddlywiki-a-mathjax-plugin/]]).
Thanks [[Guy Rutenberg - MathJax Plugin|https://www.guyrutenberg.com/2011/06/25/latex-for-tiddlywiki-a-mathjax-plugin/]].

Changes from the original
* allows to use MathJax in TiddlyWiki Classic.
* added inline equation {{{$---$}}}.
* allows to use offline.
* an equation numbers are reset by loading of a tiddler when using autoNumber.

credit of original author
<<<
||''Name:''|MathJaxPlugin|
||''Description:''|Enable LaTeX formulas for TiddlyWiki|
||''Version:''|1.0.1|
||''Date:''|Feb 11, 2012|
||''Source:''|http://www.guyrutenberg.com/2011/06/25/latex-for-tiddlywiki-a-mathjax-plugin|
||''Author:''|Guy Rutenberg|
||''License:''|[[BSD open source license]]|
||''~CoreVersion:''|2.5.0|
<<<


----


!Description

* allows to use MathJax in TiddlyWiki Classic.
* added inline equation {{{$---$}}}.
* allows to use offline.
* an equation numbers are reset by loading of a tiddler when using autoNumber.


!Usage

!! inline equation {{{$---$}}}
{{{
This is an inline equation $P(E) = {n \choose k} p^k (1-p)^{ n-k}$ 
}}}
This is an inline equation $P(E) = {n \choose k} p^k (1-p)^{ n-k}$ 

!! inline equation {{{\(---\)}}}
{{{
This is an inline equation \(P(E) = {n \choose k} p^k (1-p)^{ n-k}\)
}}}
This is an inline equation \(P(E) = {n \choose k} p^k (1-p)^{ n-k}\)
 
!! displayed equation {{{$$---$$}}}
{{{
this is a displayed equation: 
$$
P(E) = {n \choose k} p^k (1-p)^{ n-k}
$$
}}}
this is a displayed equation: 
$$
P(E) = {n \choose k} p^k (1-p)^{ n-k}
$$

!! displayed equation {{{\[---\]}}}
{{{
this is a displayed equation: 
\[
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
\]
}}}
this is a displayed equation: 
\[
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
\]

!!equation numbers
{{{
\begin{equation}
   E = mc^2
\end{equation}
}}}
will be numbered, while
\begin{equation}
   E = mc^2
\end{equation}

\begin{equation}
   E = mc^2
\end{equation}

\begin{equation}
   E = mc^2
\end{equation}

{{{
\begin{equation*}
   e^{\pi i} + 1 = 0
\end{equation*}
}}}
won’t be numbered.

\begin{equation*}
   e^{\pi i} + 1 = 0
\end{equation*}


labeled equation and a reference.
{{{
In equation $\eqref{eq:sample}$, we find the value of an
interesting integral:

\begin{equation}
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
  \label{eq:sample}
\end{equation}
}}}
In equation $\eqref{eq:sample}$, we find the value of an
interesting integral:

\begin{equation}
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
  \label{eq:sample}
\end{equation}


!!!If you writing the dollar sign into a tiddler. To use escape the "$" sign for "\$" notation.
{{{
13‑inch starts at \$1299, 15‑inch starts at \$1999
}}}
13‑inch starts at \$1299, 15‑inch starts at \$1999




----


!Tips!

!!Offline use in the local library
When you want to use offline. Require to install "MathJax" on your PC.

!!How to local installation

!!!setp1.
Download MathJax zip file. Extract zip file using any extract tool. For example, [[7-Zip|http://www.7-zip.org/]], [[Lhaplus|http://www.forest.impress.co.jp/library/software/lhaplus/]], etc.

Download MathJax from here.
* [[MathJax|http://docs.mathjax.org/en/latest/installation.html]]

Extract "MathJax-2.x.zip" files. ("x" is any number of MathJax Current Version.) 
Rename the directory name to "MathJax" from "MathJax-2.x".  
Copy the "MathJax" directory to your TiddlyWiki directory.

These files should be installed under the directory of TiddlyWiki.
like this
{{{
TiddlyWiki/
    +-- memo.html           <== your TiddlyWiki file
    +-- MathJax/            <== MathJax directory is here
            +-- config/
            +-- docs/
            +-- extensions/
            +-- fonts/
            +-- images/
            +-- jax/
            +-- localization/
            +-- test/
            +-- unpacked/
            +-- MathJax.js
            *** etc. *** 
}}}

!!!step2.
Enable the Pulgin Options ''chkMathJaxOffline'' checkbox below.

!!!step3.
Save the TiddlyWiki. Reload the TiddlyWiki browser window.

----


!Options

Offline use in the local library if enabled.
<<option chkMathJaxOffline>> ''chkMathJaxOffline''


! Code
***/
//{{{
if (typeof config.options.chkMathJaxOffline === "undefined") {
    config.options.chkMathJaxOffline = false;    
}

config.extensions.MathJax = {

    // ## Offine use ##
    Local_MathJax: "MathJax/MathJax.js?config=TeX-AMS_HTML",

    // ## Online use ##
    CDN_MathJax: "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS-MML_CHTML",


    // ## MathJax Configuration Options. MathJax.Hub.Config() ##
    HubConfig: {
        menuSettings: { locale: "en" },  // if setting Menu language "japanese" is "ja"
        extensions: [ "tex2jax.js", "MathMenu.js", "MathZoom.js" ],
        TeX: {
            extensions: [ "AMSmath.js", "AMSsymbols.js", "noErrors.js", "noUndefined.js" ],
            noErrors: { disabled: true },
            noUndefined: { disabled: true },
            equationNumbers: { autoNumber: "AMS" } 
        },
        jax: [ "input/TeX", "output/HTML-CSS" ],
        tex2jax: {
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            processEscapes: true,
            processEnvironments: true
        },
        "HTML-CSS": {
            scale: 100,
            undefinedFamily: "Consolas, Meiryo, verdana, STIXGeneral"
        },
        styles: { ".MathJax": { color:"black"} },
        noErrors: {
            inlineDelimiters: [['$','$'], ["\\(","\\)"]],
            multiLine: true,    // false for TeX on all one line
            style: {
                "font-size":   "80%",
                "text-align":  "left",
                "color":       "green",
                "padding":     "1px 3px",
                "border":      "1px solid"
                // add any additional CSS styles that you want
                // ( be sure there is no extra comma at the end of the last item )
            }
        },
        noUndefined: {
            attributes: {
                mathcolor: "red",
                mathbackground: "#FFEEEE",
                mathsize: "90%"
            }
        }
    },

    displayTiddler: function( TiddlerName ) {
        config.extensions.MathJax.displayTiddler_old.apply( this, arguments );
        MathJax.Hub.Queue(
            [ "resetEquationNumbers", MathJax.InputJax.TeX ],
            [ "Typeset", MathJax.Hub ]
        );
    },

    loadScript: function(src, callback) {
        var elem = document.createElement('script');
        elem.type = 'text/javascript';
        elem.src = src

        if ( elem.addEventListener ) { 
            elem.addEventListener('load', callback, false);
        } else {
            elem.onreadystatechange = function() { // ## IE8 ##
                if ( elem.readyState in {complete: 1, loaded: 1 }) {
                    elem.onreadystatechange = null;
                    callback();
                }
            };
        }
        document.getElementsByTagName('head')[0].appendChild(elem);
    },

    install: function() {
        var _mathjax = config.extensions.MathJax;
        var mathJaxScript = config.options.chkMathJaxOffline ? _mathjax.Local_MathJax : _mathjax.CDN_MathJax;
        
        _mathjax.loadScript( mathJaxScript, function () {
            MathJax.Localization.setLocale("ja");  // ## setting locale "Japan" ##
            MathJax.Hub.Config( _mathjax.HubConfig );
            MathJax.Hub.Startup.onload();
            _mathjax.displayTiddler_old = story.displayTiddler;
            story.displayTiddler = _mathjax.displayTiddler;
        });
    }
};

config.formatters.push({
    name: "escapeSingleDollar",
    match: "\\\\\\$",
    handler: function(w) {
        createTiddlyElement( w.output, "span" ).innerHTML = "&#36;";
        w.nextMatch = w.matchStart+2;
    }
});

config.formatters.push({
    name: "mathJaxFormula",
    match: "\\\\\\[|\\$\\$|\\\\\\(|\\$",
    handler: function(w) {
        switch( w.matchText ) {
            case "\\[": // displayed equations
                this.lookaheadRegExp = /\\\[((?:.|\n)*?)(\\\])/mg;
                break;
            case "$$": // displayed equations
                this.lookaheadRegExp = /\$\$((?:.|\n)*?)(\$\$)/mg;
                break;
            case "\\(": // inline equations
                this.lookaheadRegExp = /\\\(((?:.)*?)(\\\))/mg;
                break;
            case "$": // inline equations
                this.lookaheadRegExp = /\$((?:.)*?)(\$)/mg;
                break;

            default:
                break;
        }
        this.lookaheadRegExp.lastIndex = w.matchStart;
        var lookaheadMatch = this.lookaheadRegExp.exec( w.source );

        if( lookaheadMatch && lookaheadMatch.index == w.matchStart ) {
            createTiddlyElement( w.output, "span", null, "TW-math", lookaheadMatch[0] );
            w.nextMatch = this.lookaheadRegExp.lastIndex;
        }

        try {
            if(typeof MathJax.version == "undefined") {}
        } catch (e) {
            var _mathjax = config.extensions.MathJax;
            var mathJaxScript = config.options.chkMathJaxOffline ? _mathjax.Local_MathJax : _mathjax.CDN_MathJax;
            console.log("MathJax load error, " + mathJaxScript + " not found.");
        }
    }
});

config.extensions.MathJax.install();
//}}}
