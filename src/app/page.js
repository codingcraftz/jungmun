import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Calendar, Image as ImageIcon, MessageSquare, Users } from "lucide-react";
import PushNotificationButton from "@/components/PushNotificationButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 bg-primary text-white p-4 shadow-md z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">중문배드민턴 클럽</h1>
          <PushNotificationButton />
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 p-4 pb-24">
        {/* 환영 메시지 */}
        <Card className="mb-6 bg-primary text-white">
          <CardContent className="pt-6">
            <h2 className="text-xl font-bold mb-2">안녕하세요!</h2>
            <p>중문배드민턴 클럽에 오신 것을 환영합니다.</p>
          </CardContent>
        </Card>

        {/* 메뉴 그리드 */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="hover:bg-gray-100 transition-colors">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-center flex flex-col items-center">
                <Users className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">회원목록</span>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="hover:bg-gray-100 transition-colors">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-center flex flex-col items-center">
                <Calendar className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">일정</span>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="hover:bg-gray-100 transition-colors">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-center flex flex-col items-center">
                <MessageSquare className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">공지사항</span>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="hover:bg-gray-100 transition-colors">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-center flex flex-col items-center">
                <ImageIcon className="h-8 w-8 mb-2 text-primary" />
                <span className="text-sm">갤러리</span>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* 최신 공지사항 */}
        <h3 className="font-bold text-lg mt-8 mb-4">최신 공지사항</h3>
        <Card className="mb-4">
          <CardHeader className="p-4 pb-1">
            <CardTitle className="text-base">정기 모임 안내</CardTitle>
            <CardDescription className="text-xs">2023.12.20</CardDescription>
          </CardHeader>
          <CardContent className="p-4 pt-2">
            <p className="text-sm">이번 주 토요일 정기 모임은 오후 3시부터 진행됩니다.</p>
          </CardContent>
        </Card>
      </main>

      {/* 하단 내비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2">
        <Button variant="ghost" className="flex flex-col items-center text-xs py-1 h-auto">
          <Users className="h-5 w-5 mb-1" />
          <span>회원</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-xs py-1 h-auto">
          <Calendar className="h-5 w-5 mb-1" />
          <span>일정</span>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-col items-center text-xs py-1 h-auto text-primary"
        >
          <MessageSquare className="h-5 w-5 mb-1" />
          <span>공지</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center text-xs py-1 h-auto">
          <ImageIcon className="h-5 w-5 mb-1" />
          <span>갤러리</span>
        </Button>
      </nav>
    </div>
  );
}
