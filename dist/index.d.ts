export interface Action {
    selector: string;
    func(target: Element): void;
}
declare const Pylon: {
    action: (actions: Action[]) => void;
};
export default Pylon;
