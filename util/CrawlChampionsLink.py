import requests
from bs4 import BeautifulSoup

ROOT_PAGE = 'https://www.op.gg'
TARGET_PAGE = ROOT_PAGE + '/champion/statistics'

headers = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit 537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'}
chmpsDocument = requests.get(TARGET_PAGE, headers=headers)
chmpsBS4 = BeautifulSoup(chmpsDocument.content, 'html.parser')

chmps = chmpsBS4.find_all('td', class_='champion-index-table__cell--champion')

chmps_list = []
for chmp in chmps:
    chmp_name = chmp.div.text
    chmp_link = ROOT_PAGE + chmp.a['href']
    chmps_list.append({'id': cnt, 'name': chmp_name, 'link': chmp_link})

print(chmps_list)
