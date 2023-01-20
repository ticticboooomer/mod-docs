# Entry - Tick Modifier

The `mm:tick_modifier` recipe entry has no real applicable use as an output and may cause unwanted behaviour as this is not intended to be used as an output.

**IMPORTANT** > When used as an input, it is advised to put the entry of type `mm:tick_modifier` at the end of the array of related requirements. Not doing so will cause the recipe ticks to chance without checking all related requirements, thus making this situation cause possibly unexpected behaviour 

**IMPORTANT** > As the generic `mm:tick_modifier` recipe entry has no direct requirements (e.g. an ingredient), when used in isolation, it will be accepted as an accepted input and the recipe will continue whilst also applying the tick modification. TL;DR read the above sentence and don't use it in isolation, there is no point.


### The Recipe Entry Id
```json
{
    "type": "mm:tick_modifier",
    ...
}
```

### Full Definition
```json
{
    "type": "mm:tick_modifier",
    "newDuration": <if reached/run, the duration of the recipe will chance to this integer value>
}
```

### Common Example
```json
{
    "type": "mm:tick_modifier",
    "newDuration": 10
}
```