import re

def remove_snow(s):
  regex = re.compile(r'(\w)\1')

  while regex.search(s):
    s = regex.sub('', s)

  return s
