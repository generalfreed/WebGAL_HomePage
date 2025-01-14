import { Game } from '@/types'

// 首页显示的游戏id，建议最多只放4个
export const homeGamesId: Game['id'][] = ['elf-of-era-idols-project', 'hoshinasuzu', 'observer']

// 全部游戏
export const games: Game[] = [
  {
    id: 'hoshinasuzu',
    title: '铃色☆记忆',
    developer: '星奈组',
    releaseDate: '2022-06-28',
    url: 'http://hoshinasuzu.cn/',
    cover: 'suzu.webp',
  },
  {
    id: 'elf-of-era-idols-project',
    title: 'Elf of Era! Idols Project',
    developer: 'Elf of Era! Idols Project 制作组',
    releaseDate: '2023-06-22',
    url: 'https://store.steampowered.com/app/2414730/Elf_of_Era_Idols_Project/',
    cover: 'elf-of-Era!-Idols-Project.webp',
  },
  {
    id: 'observer',
    title: '観察者-OBSERVER-',
    developer: 'Yuji Sakai',
    releaseDate: '2023-11-12',
    url: 'https://digigame-webgal.onrender.com/',
    cover: 'observer.webp',
  },
]
