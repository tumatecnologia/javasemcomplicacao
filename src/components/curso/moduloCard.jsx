import React from "react";
import { 
  BookOpen, Repeat, Database, Box, Layers, ShieldAlert,
  FolderTree, Rocket, Zap, Puzzle, GitBranch, TestTube,
  Lock, CheckCircle, ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ICON_MAP = {
  BookOpen, Repeat, Database, Box, Layers, ShieldAlert,
  FolderTree, Rocket, Zap, Puzzle, GitBranch, TestTube
};

export default function ModuleCard({ module, completedLessons, isPremium, onSelectLesson, currentLesson }) {
  const Icon = ICON_MAP[module.icon] || BookOpen;
  const totalLessons = module.lessons.length;
  const completed = module.lessons.filter(l => completedLessons?.includes(l.id)).length;
  const progress = totalLessons > 0 ? (completed / totalLessons) * 100 : 0;
  const isLocked = !module.free && !isPremium;

  return (
    <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all
      ${isLocked ? "border-slate-200 opacity-75" : "border-slate-200/60 hover:shadow-md"}`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center
              ${isLocked ? "bg-slate-100" : "bg-orange-50"}`}>
              {isLocked 
                ? <Lock className="w-5 h-5 text-slate-400" />
                : <Icon className="w-5 h-5 text-orange-500" />
              }
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">{module.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{totalLessons} aulas</p>
            </div>
          </div>
          {module.free && (
            <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">Grátis</Badge>
          )}
          {isLocked && (
            <Badge className="bg-amber-50 text-amber-700 border-amber-200 text-xs">Premium</Badge>
          )}
        </div>

        {/* Progress bar */}
        {!isLocked && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-slate-500 mb-1.5">
              <span>{completed}/{totalLessons} concluídas</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Lessons */}
        <div className="space-y-1">
          {module.lessons.map(lesson => {
            const isCompleted = completedLessons?.includes(lesson.id);
            const isCurrent = currentLesson === lesson.id;
            return (
              <button
                key={lesson.id}
                onClick={() => !isLocked && onSelectLesson(lesson.id)}
                disabled={isLocked}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm transition-all
                  ${isLocked ? "cursor-not-allowed text-slate-400" : "hover:bg-slate-50 cursor-pointer"}
                  ${isCurrent ? "bg-orange-50 text-orange-700" : "text-slate-700"}
                  ${isCompleted ? "text-green-700" : ""}`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                ) : isLocked ? (
                  <Lock className="w-4 h-4 text-slate-300 shrink-0" />
                ) : (
                  <div className={`w-4 h-4 rounded-full border-2 shrink-0
                    ${isCurrent ? "border-orange-500 bg-orange-500" : "border-slate-300"}`} 
                  />
                )}
                <span className="truncate flex-1">{lesson.title}</span>
                {!isLocked && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}