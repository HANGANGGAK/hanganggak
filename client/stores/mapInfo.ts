import create from 'zustand'interface IMapInfoStoreProps {    info: any;    setMapInfo: (data: any) => void;    reset: () => void;}export const useMapInfoStore = create<IMapInfoStoreProps>((set) => ({    info: {},    setMapInfo: (data: any) => set(() => ({info: data})),    reset: () => set(() => ({}))}))