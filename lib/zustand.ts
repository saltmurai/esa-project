
import create from "zustand"


export const useBearStore = create((set) => ({
	startPoint: [],
	endPoint: [],
	addStartPoint: (name: string) => set((state: any) => (state.startPoint = [...state.startPoint, name])),
	removeStartPoint: (name: string) => set((state: any) => (state.startPoint = state.startPoint.filter((point: any) => point !== name))),
	addEndPoint: (name: string) => set((state: any) => (state.endPoint = [...state.endPoint, name])),
	removeEndPoint: (name: string) => set((state: any) => (state.endPoint = state.endPoint.filter((point: any) => point !== name))),
	removeAllPoint: () => set({
		startPoint: [],
		endPoint: []
	})
}))