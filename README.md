# Fucking `debug.enabled`

This repo is just a way to test out why-the-fuck `debug.enabled` affects
`debug()` output making it dissapear sometimes. Or find out what's the thing
that causes inconsistency on the output of debug lines.


## Conclusion

Debug lines using a no-namespaced required debug won't get printed, no matter
if `at()` is used or not.
